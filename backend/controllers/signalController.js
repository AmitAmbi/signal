const Signal = require('../models/signalModel');

const signals = ['Red', 'Yellow', 'Green'];
let currentIndex = 0;


const getSignals = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const signals = await Signal.find()
      .sort({ timestamp: -1 })
      .limit(Number(limit))
      .skip((page - 1) * limit);

    console.log(`📡 Fetching Signals | Page: ${page}, Limit: ${limit}`);
    res.json(signals);
  } catch (error) {
    console.error('❌ Error fetching signals:', error);
    res.status(500).json({ error: 'Error fetching signals' });
  }
};


// const changeSignal = async (io) => {
//   try {
//     const vehicleCounts = {
//       North: Math.floor(Math.random() * 20),
//       South: Math.floor(Math.random() * 20),
//       East: Math.floor(Math.random() * 20),
//       West: Math.floor(Math.random() * 20),
//     };

//     // Determine the side with the most cars
//     const activeSide = Object.keys(vehicleCounts).reduce((a, b) => vehicleCounts[a] > vehicleCounts[b] ? a : b);

//     // Yellow light before Green
//     io.emit('updateSignal', { activeSide: "Yellow", vehicles: vehicleCounts });
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 sec

//     // Green light
//     const savedSignal = await Signal.create({ activeSide, vehicles: vehicleCounts });
//     io.emit('updateSignal', savedSignal);
//     console.log(`🚦 Signal Changed: ${activeSide} is now Green`);

//     // Yellow light before Red
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 sec
//     io.emit('updateSignal', { activeSide: "Yellow", vehicles: vehicleCounts });

//   } catch (error) {
//     console.error('❌ Error changing signal:', error);
//   }
// };
const changeSignal = async (io) => {
    try {
      const vehicleCounts = {
        North: Math.floor(Math.random() * 10),
        South: Math.floor(Math.random() * 10),
        East: Math.floor(Math.random() * 10),
        West: Math.floor(Math.random() * 10),
      };
  
      const activeSide = Object.keys(vehicleCounts).reduce((a, b) =>
        vehicleCounts[a] > vehicleCounts[b] ? a : b
      );
  
      const savedSignal = await Signal.create({ activeSide, vehicles: vehicleCounts });
  
      io.emit("updateSignal", savedSignal);
    } catch (error) {
      console.error("❌ Error changing signal:", error);
    }
  };


const changeSignalManually = async (req, res) => {
  try {
    currentIndex = (currentIndex + 1) % signals.length;
    const newSignal = { signal: signals[currentIndex] };

    const savedSignal = await Signal.create(newSignal);
    console.log(`🚦 Signal Changed Manually: ${signals[currentIndex]}`);

    res.status(200).json({ message: "Signal changed successfully", newSignal: savedSignal });
  } catch (error) {
    console.error('❌ Error manually changing signal:', error);
    res.status(500).json({ error: 'Error changing signal' });
  }
};


const updateTrafficCount = async (req, res) => {
  try {
    const { North, South, East, West } = req.body;

    if (North < 0 || South < 0 || East < 0 || West < 0) {
      return res.status(400).json({ error: 'Vehicle count must be non-negative' });
    }

    const vehicleCounts = { North, South, East, West };
    const activeSide = Object.keys(vehicleCounts).reduce((a, b) => vehicleCounts[a] > vehicleCounts[b] ? a : b);


    const savedSignal = await Signal.create({ activeSide, vehicles: vehicleCounts });

    console.log(`🚦 Updated Traffic: ${activeSide} is now Green`);
    res.status(200).json(savedSignal);
  } catch (error) {
    console.error('❌ Error updating traffic:', error);
    res.status(500).json({ error: 'Error updating traffic' });
  }
};


module.exports = { getSignals, changeSignal, changeSignalManually, updateTrafficCount };

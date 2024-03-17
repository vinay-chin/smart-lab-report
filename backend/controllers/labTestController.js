// controllers/labTestController.js
const LabTest = require('../models/labTest');

// Controller functions for lab tests
exports.getAllLabTests = async (req, res) => {
  try {
    const labTests = await LabTest.findAll();
    res.json(labTests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLabTestById = async (req, res) => {
  try {
    const labTest = await LabTest.findByPk(req.params.id);
    if (!labTest) {
      return res.status(404).json({ message: 'Lab test not found' });
    }
    res.json(labTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLabTest = async (req, res) => {
  try {
    const newLabTest = await LabTest.create(req.body);
    res.status(201).json(newLabTest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateLabTest = async (req, res) => {
  try {
    const [updated] = await LabTest.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedLabTest = await LabTest.findByPk(req.params.id);
      return res.json(updatedLabTest);
    }
    throw new Error('Lab test not found');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteLabTest = async (req, res) => {
  try {
    const deleted = await LabTest.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Lab test not found' });
    }
    res.json({ message: 'Lab test deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

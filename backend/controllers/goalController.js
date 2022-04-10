const asyncHandler = require('express-async-handler')

//@desc: Get goals
//@route:  GET /api/goals
//@access: private
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get goals'})
})

//@desc: Set goals
//@route:  POST /api/goals
//@access: private
const setGoal = asyncHandler(async(req, res) => {
    if (!req.body?.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
    res.status(200).json({ message: 'Set goal'})
})

//@desc: Update goals
//@route:  PUT /api/goals/:id
//@access: private
const  updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Updating Goal ${req.params.id}`})
})

//@desc: Delete goals
//@route:  GET /api/goals/:id
//@access: private
const deleteGoal = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Deleting Goal ${req.params.id}` });
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}
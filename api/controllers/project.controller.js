import Project from "../models/project.model.js";

export const upload = async (req, res, next) => {
  
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to upload a project'));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newProject = new Project({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    next(error);
  }
};


// get projects api route
export const getproject = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const project = await Project.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.projectId && { _id: req.query.projectId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);
    const totalProject = await Project.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthProject = await Project.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });
    res.status(200).json({
      project,
      totalProject,
      lastMonthProject,
    });
  } catch (error) {
    next(error);
  }
};



// Delete projects
export const deleteproject = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this project'));
  }
  try {
    await Project.findByIdAndDelete(req.params.projectId);
    res.status(200).json('The project has been deleted');
  } catch (error) {
    next(error);
  }
};
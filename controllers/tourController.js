const fs = require("fs");
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => { //val is only available when there is param middleware involved.
  console.log(`From param middleware inside tour controller...id is ${val}`);
  if (+req.params.id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  console.log(`From check body middleware....`);
  if(!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'Bad Request',
      message: "Misisng name and prices"
    })
  }
  next();
}

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    result: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  //called route handler
  console.log(req.params);
  //optional parameter can be added via adding ? on a param :x?
  const id = +req.params.id;
  const tour = tours.find((el) => el.id === id);
  //console.log(id, tours.length)
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body); //merges multiple object into a new object.

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tours: newTour,
        },
      });
    }
  );
  //res.send('Done'); Never send 2 responses.
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here...>",
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    //204 means no content
    status: "success",
    data: null,
  });
};

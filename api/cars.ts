//WebAPI Controller File
import * as express from 'express';
import Car from '../models/car';

let router = express.Router();

router.get('/', (req, res)=>{
    Car.find().then((cars)=>{
      console.log('You have your hands in the cookie jar...');
      res.json(cars);
    }).catch((err)=>{
      res.json(err)
    });
});

router.get('/:id', (req, res)=>{
  Car.findOne({_id: req.params.id}).then((car)=>{
      res.json(car)
  }).catch((err)=>{
      res.json(err);
  });
});

router.post('/', (req, res)=>{
  let carr = new Car();
  carr.make = req.body.make;
  carr.carModel = req.body.carModel;
  carr.year = req.body.year;
  carr.save().then((newCarr)=>{
    res.json(newCarr);
  }).catch((err)=>{
    res.json(err)
  });
});

router.put('/', (req, res)=>{
  Car.findOne({_id: req.body._id}).then((car)=>{
    console.log('The car has hit the api controller..')
    car.make = req.body.make;
    car.carModel = req.body.carModel;
    car.year = req.body.year;
    car.save().then((car)=>{
      console.log('the car has been saved')
      res.json(car)
    }).catch((err)=>{
      res.json(err);
    });
  });
});

router.delete('/:id',(req, res)=>{
  console.log('You just deleted a car')
  Car.remove({_id: req.params.id}).then((car)=>{
    res.json(car);
  }).catch((err)=>{
    res.json(err)
  });
});

export default router;

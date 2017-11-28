package hu.unideb.back.controller.food;

import hu.unideb.back.controller.food.converter.CreateFoodRequest;
import hu.unideb.back.controller.food.converter.UpdateFoodRequest;
import hu.unideb.back.service.food.FoodService;
import hu.unideb.back.service.food.converter.CreateFoodRequestConverter;
import hu.unideb.back.service.food.converter.UpdateFoodRequestConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//@Controller
@RestController
@RequestMapping("/api/food")
public class FoodController {

    private static final Logger logger = LoggerFactory.getLogger(FoodController.class);

    @Autowired
    private FoodService foodService;


    @RequestMapping(value = "/foodslist")
    public @ResponseBody ResponseEntity<?> getFoods(){
        logger.info("FooodsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa foodslist" );
        return new ResponseEntity<>(foodService.getAllFoods(), HttpStatus.OK);
    }

    @RequestMapping("/savefood")
    public ResponseEntity<?> saveFood(@RequestBody CreateFoodRequest createFoodRequest){
        foodService.saveFood(createFoodRequest);
        return new ResponseEntity<>(foodService.getAllFoods(), HttpStatus.OK);
    }
    @RequestMapping("/updatefood")
    public ResponseEntity<?> updateFood(@RequestBody UpdateFoodRequest updateFoodRequest){
        if (foodService.updateFood(updateFoodRequest)) {
            return new ResponseEntity<>(foodService.getAllFoods(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(foodService.getAllFoods(), HttpStatus.BAD_REQUEST);
        }
    }
    @RequestMapping("/{foodId}/delete")
    public ResponseEntity<?> deleteFood(@PathVariable(value = "foodId") long id){
        logger.info("DELELEELELEELTE: "+id);
        if(foodService.deleteFood(id)){
            return new ResponseEntity<>(foodService.getAllFoods(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(foodService.getAllFoods(), HttpStatus.BAD_REQUEST);
        }
    }
}
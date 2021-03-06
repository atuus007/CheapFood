package hu.unideb.back.controller.food;

import hu.unideb.back.controller.food.converter.CreateFoodRequest;
import hu.unideb.back.controller.food.converter.CreateFoodRequestwithingerdietns;
import hu.unideb.back.controller.food.converter.UpdateFoodRequest;
import hu.unideb.back.model.Ingredients;
import hu.unideb.back.service.food.FoodService;
import hu.unideb.back.service.food.converter.CreateFoodRequestConverter;
import hu.unideb.back.service.food.converter.UpdateFoodRequestConverter;
import hu.unideb.back.service.genelogy.GenelogyService;
import hu.unideb.back.service.ingredients.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//@Controller
@RestController
@RequestMapping("/api/food")
@CrossOrigin(origins = "http://localhost:3000")
public class FoodController {

    private static final Logger logger = LoggerFactory.getLogger(FoodController.class);

    @Autowired
    private FoodService foodService;

    @Autowired
    private IngredientsService ingredientsService;

    @Autowired
    private GenelogyService genelogyService;


    @RequestMapping(value = "/foodslist")
    public @ResponseBody ResponseEntity<?> getFoods(){
        logger.info("FooodsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa foodslist" );
        return new ResponseEntity<>(foodService.getAllFoods(), HttpStatus.OK);
    }

    @RequestMapping(value = "/foodslist/{money1}/{money2}")
    public @ResponseBody ResponseEntity<?> getFoodsbetweenvalue(@PathVariable(value = "money1") Integer money1,@PathVariable(value = "money2") Integer money2 ){
        logger.info("foodslist beweeeeeeeeeeeen" );
        return new ResponseEntity<>(foodService.getAllFoodsbeetween(money1,money2), HttpStatus.OK);
    }

    @RequestMapping("/savefood")
    public ResponseEntity<?> saveFood(@RequestBody CreateFoodRequest createFoodRequest){
        logger.info("SAVE FOOOOD AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa" );
        foodService.saveFood(createFoodRequest);
        return new ResponseEntity<>(foodService.getAllFoods(), HttpStatus.OK);
    }

    @RequestMapping("/savefoodwithings")
    public ResponseEntity<?> saveFoodwithIngerdients(@RequestBody CreateFoodRequestwithingerdietns createFoodRequestwithingerdietns){
        logger.info("SAVE FOOOOD with ings!!!" );
        Integer osszar = 0;
        osszar = ingredientsService.saveFoodwithingsing(createFoodRequestwithingerdietns);
        foodService.saveFoodwithingsfood(createFoodRequestwithingerdietns, osszar);
        genelogyService.saveFoodwithingsing(createFoodRequestwithingerdietns);
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

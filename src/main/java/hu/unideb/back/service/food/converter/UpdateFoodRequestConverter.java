package hu.unideb.back.service.food.converter;

import hu.unideb.back.controller.food.converter.UpdateFoodRequest;
import hu.unideb.back.model.Food;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class UpdateFoodRequestConverter {

    private final ModelMapper modelMapper;

    private static final Logger logger = LoggerFactory.getLogger(UpdateFoodRequestConverter.class);

    public UpdateFoodRequestConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public Food from(UpdateFoodRequest updateFoodRequest){
        logger.info("Converting UpdateFoodRequestConverter from Food.");
        return modelMapper.map(updateFoodRequest,Food.class);
    }
}

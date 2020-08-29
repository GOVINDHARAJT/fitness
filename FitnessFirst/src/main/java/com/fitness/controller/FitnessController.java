package com.fitness.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fitness.model.Fitness;
import com.fitness.service.FitnessService;

@RestController
@RequestMapping(path="/fitness")
@CrossOrigin(origins = "http://localhost:4200")
public class FitnessController {

  @Autowired	
  private FitnessService fitnessService;


   @PostMapping(path="/createFitness")
	public ResponseEntity<Fitness>  saveFitness(@Valid @RequestBody Fitness fitness)
	{
	  
	   Fitness saveFitness2 = fitnessService.saveFitness(fitness);
		
		return new ResponseEntity<Fitness>(saveFitness2, HttpStatus.CREATED);
	}
	
	@PostMapping(path="/createMultipleFitness")
	public ResponseEntity<List<Fitness>> SaveFitnesses(@Valid @RequestBody List<Fitness> fitness)
	{
		List<Fitness> saveFitness = fitnessService.saveFitnesses(fitness);
		return new ResponseEntity<List<Fitness>>(saveFitness, HttpStatus.CREATED);
	}
	
	@GetMapping(path="/retriveFitness")
	public ResponseEntity<List<Fitness>> getFitness()
	{
		List<Fitness> fitness = fitnessService.getFitness();
		
		return new ResponseEntity<List<Fitness>>(fitness, HttpStatus.OK);
		
	}
	
	@GetMapping(path="/retriveFitness/FitnessById/{fitnessId}")
	public ResponseEntity< Optional<Fitness>> getFitnessById(@PathVariable Long fitnessId)
	{
		  Optional<Fitness> fitnessById = fitnessService.getFitnessById(fitnessId);
		
		return new ResponseEntity< Optional<Fitness>>(fitnessById, HttpStatus.OK);
		
	}
	@GetMapping(path="/retriveExcerciseName/{excerciseName}")
	public ResponseEntity<List<Fitness>> getExcerciseName(@PathVariable String excerciseName)
	{
		List<Fitness> excerciseName1 = fitnessService.getExcerciseName(excerciseName);
		
		return new ResponseEntity<List<Fitness>>(excerciseName1, HttpStatus.OK);
		
	}
	
	@GetMapping(path="/retriveWorkoutType/{workouttype}")
	public ResponseEntity<List<Fitness>> getworkoutType(@PathVariable String workouttype)
	{
		 List<Fitness> getworkoutType = fitnessService.getworkoutType(workouttype);
		
		return new ResponseEntity<List<Fitness>>(getworkoutType, HttpStatus.OK);
		
	}
	@GetMapping(path="/retriveSubtypeofWorkout/{subtypeofWorkout}")
	public ResponseEntity<List<Fitness>> getsubtypeofWorkout(@PathVariable String subtypeofworkout)
	{
		 List<Fitness> getsubtypeofWorkout = fitnessService.getSubtypeofWorkout(subtypeofworkout);
		
		return new ResponseEntity<List<Fitness>>(getsubtypeofWorkout, HttpStatus.OK);
		
	}
	@GetMapping(path="/retriveFitnessDuration/{duration}")
	public ResponseEntity<List<Fitness>> getDuration(@PathVariable int duration)
	{
		 List<Fitness> getByDuration = fitnessService.getDuration(duration);
		
		return new ResponseEntity<List<Fitness>>(getByDuration, HttpStatus.OK);
		
	}
	@GetMapping(path="/retriveRating/{rating}")
	public ResponseEntity<List<Fitness>> getfitnessRating(@PathVariable int rating)
	{
		List<Fitness> getfitnessRating = fitnessService.getfitnessRating(rating);
		
		return new ResponseEntity<List<Fitness>>(getfitnessRating, HttpStatus.OK);
		
	}
	
	
	@GetMapping(path="/workoutTypeAndSubtypeofWorkout/WorkoutType/{type}/SubtypeofWorkout/{subType}")
	public ResponseEntity<List<Fitness>> getWorkoutTypeAndSubtypeofWorkout(@PathVariable String type,@PathVariable String subType)
	{
        
	   List<Fitness> WorkoutTypeANDSubtypeofWorkout = fitnessService.getWorkoutTypeAndSubtypeofWorkout(type, subType);
		return new ResponseEntity<List<Fitness>>( WorkoutTypeANDSubtypeofWorkout , HttpStatus.OK);
		
	}
	@GetMapping(path="/workoutTypeAndDuration/WorkoutType/{type}/Duration/{duration}")
	public ResponseEntity<List<Fitness>> getWorkoutTypeAndDuration(@PathVariable String type,@PathVariable int duration )
	{
        
	   List<Fitness> getWorkoutTypeANDDuration = fitnessService.getWorkoutTypeAndDuration(type, duration);
		return new ResponseEntity<List<Fitness>>( getWorkoutTypeANDDuration , HttpStatus.OK);
		
	}
	@GetMapping(path="/workoutTypeAndRating/WorkoutType/{type}/Rating/{rating}")
	public ResponseEntity<List<Fitness>> getWorkoutTypeAndRating(@PathVariable String type,@PathVariable int rating )
	{
        
	   List<Fitness> getWorkoutTypeANDRating = fitnessService.getWorkoutTypeAndRating(type, rating);
		return new ResponseEntity<List<Fitness>>(  getWorkoutTypeANDRating , HttpStatus.OK);
		
	}
	@GetMapping(path="/subtypeofWorkoutAndRating/SubtypeofWorkout/{subtype}/Rating/{rating}")
	public ResponseEntity<List<Fitness>> getSubtypeofWorkoutAndRating(@PathVariable String subtype,@PathVariable int rating )
	{
        
	   List<Fitness> getSubtypeofWorkoutANDRating = fitnessService.getSubtypeofWorkoutAndRating(subtype, rating);
		return new ResponseEntity<List<Fitness>>(getSubtypeofWorkoutANDRating , HttpStatus.OK);
		
	}
	@GetMapping(path="/retrivedurationLessThanEqual/{duration}")
	public ResponseEntity<List<Fitness>> getDurationLessThanEqual(@PathVariable int duration)
	{
		List<Fitness> getDurationLessThanEqual = fitnessService.getdurationLessThanEqual(duration);
		
		return new ResponseEntity<List<Fitness>>(getDurationLessThanEqual, HttpStatus.OK);
		
	}
	
	
}

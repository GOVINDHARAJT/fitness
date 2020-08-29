package com.fitness.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitness.model.Fitness;





@Repository
public interface FitnessRepository extends JpaRepository<Fitness, Long> {

	List<Fitness> findByExcerciseName(String name);

	List<Fitness> findByWorkoutType(String name);
	
	List<Fitness> findBySubtypeofWorkout(String name);

	List<Fitness> findByDuration(int time);
	
	List<Fitness> findByRating(int rating);
	
	List<Fitness> findByWorkoutTypeAndRating(String WorkoutType, int rating);
	
	List<Fitness> findBySubtypeofWorkoutAndRating(String subType, int rating);
	
	List<Fitness> findByWorkoutTypeAndSubtypeofWorkout(String type, String subType);
	
	List<Fitness> findByWorkoutTypeAndDuration(String type, int duration);
	
	List<Fitness> findByDurationLessThanEqual(int time);
	
}
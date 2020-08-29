package com.fitness.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.model.Fitness;
import com.fitness.repository.FitnessRepository;


@Service
public class FitnessService {

	@Autowired
	private FitnessRepository fitnessRepository;
	
    @Transactional
    public Fitness saveFitness(Fitness fitness) {
        return fitnessRepository.save(fitness);
    }
    
    @Transactional
    public List<Fitness> saveFitnesses(List<Fitness> fitness) {
        return fitnessRepository.saveAll(fitness);
    }
    
    
    public List<Fitness> getFitness() {
        return fitnessRepository.findAll();
    }
    public Optional<Fitness> getFitnessById(Long id) {
        return fitnessRepository.findById(id);
    }
    
    public List<Fitness> getExcerciseName(String name)
    {
    	return fitnessRepository.findByExcerciseName(name);
    }

    public List<Fitness> getworkoutType(String name)
    {
    	return fitnessRepository.findByWorkoutType(name);
    }
    public List<Fitness> getSubtypeofWorkout(String name)
    {
    	return fitnessRepository.findBySubtypeofWorkout(name);
    }

    public List<Fitness> getDuration(int name)
    {
    	return fitnessRepository.findByDuration(name);
    }
    public List<Fitness> getfitnessRating(int rating)
    {
    	return fitnessRepository.findByRating(rating);
    }
    public List<Fitness> getWorkoutTypeAndSubtypeofWorkout(String type,String subType)
    {
    	return fitnessRepository.findByWorkoutTypeAndSubtypeofWorkout(type,subType);
    }
    public List<Fitness> getWorkoutTypeAndDuration(String type,int duration)
    {
    	return fitnessRepository.findByWorkoutTypeAndDuration(type,duration);
    }
    
    public List<Fitness> getWorkoutTypeAndRating(String type,int rating)
    {
    	return fitnessRepository.findByWorkoutTypeAndRating(type,rating);
    }

    public List<Fitness> getSubtypeofWorkoutAndRating(String subtype,int rating)
    {
    	return fitnessRepository.findBySubtypeofWorkoutAndRating(subtype,rating);
    }

    public List<Fitness> getdurationLessThanEqual(int duration)
    {
    	return fitnessRepository.findByDurationLessThanEqual(duration);
    }
}

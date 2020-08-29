package com.fitness.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DynamicUpdate
public class Fitness {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long fitnessId;
	private String excerciseName;
	private String excerciseImage;
	private String workoutType;
	private String subtypeofWorkout;
	private int duration;
	private String benefits;
	private int rating;
}

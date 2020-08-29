package com.fitness;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
@ComponentScan({ "com.fitness.controller" })
@ComponentScan({ "com.fitness.service" })
@EnableTransactionManagement
@EnableJpaRepositories

public class FitnessFirstApplication {

	public static void main(String[] args) {
		SpringApplication.run(FitnessFirstApplication.class, args);
	}

}

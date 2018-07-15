package com.reachout.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ReachoutApplication  {

	public static void main(String[] args) {
		SpringApplication.run(ReachoutApplication.class, args);
	}
}

package com.javasampleapproach.angular4mongodb.SpringBootAngular4MongoDB.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.javasampleapproach.angular4mongodb.SpringBootAngular4MongoDB.model.Customer;

public interface CustomerMongoRepository extends MongoRepository<Customer, String> {

}

package com.marcos.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcos.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}

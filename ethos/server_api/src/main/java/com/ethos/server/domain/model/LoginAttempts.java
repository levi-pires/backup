package com.ethos.server.domain.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "login_attempts")
public class LoginAttempts {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "attempt")
	private Integer amount;
	
	public Long getId(){
		return id;
	}
	public void setId(Long id){
		this.id = id;
	}

	public Integer getAmount(){
		return amount;
	}
	public void setAmount(Integer amount){
		this.amount = amount;
	}
	public void plusOne(){
		++amount;
	}
	
	public LoginAttempts(){
		amount = 0;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		LoginAttempts other = (LoginAttempts) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
}
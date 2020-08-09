package com.ethos.server.core;

import org.springframework.context.annotation.Configuration;
import com.ethos.server.cryptx.DigestPassword;
import org.springframework.context.annotation.Bean;

@Configuration
public class DigestPasswordConfig {
	
	@Bean
	public DigestPassword digestpassword() {
		return new DigestPassword();
	}
}
package com.epita.repo;

import java.io.IOException;

public class CustomExtension extends IOException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CustomExtension(String message) {
		super(message);
	}
}


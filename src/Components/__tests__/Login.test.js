// src/Components/__tests__/Login.test.js

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Login from "../Login";

// Create a mock for axios requests
const mockAxios = new MockAdapter(axios);

// Create a mock for useNavigate and place it at the top
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

// Utility to render components wrapped in BrowserRouter
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Login Component", () => {
  beforeEach(() => {
    mockAxios.reset();
    localStorage.clear();
    jest.clearAllMocks();
    // Override window.alert to prevent jsdom errors
    window.alert = jest.fn();
  });

  test("renders the login form", () => {
    renderWithRouter(<Login />);
    expect(screen.getByText(/Log into your account/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  });

  test("allows user to type in inputs", () => {
    renderWithRouter(<Login />);
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("password123");
  });

  test("logs in successfully and redirects", async () => {
    // Set up axios to respond with success
    mockAxios.onPost("http://127.0.0.1:8000/api/login/").reply(200, {
      access: "mockAccessToken",
      refresh: "mockRefreshToken",
    });

    renderWithRouter(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/Username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // Wait for the axios request to resolve and the navigate call
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
    });

    // Check that tokens are stored in localStorage
    expect(localStorage.getItem("access_token")).toBe("mockAccessToken");
    expect(localStorage.getItem("refresh_token")).toBe("mockRefreshToken");
  });

  test("shows error message on login failure", async () => {
    // Set up axios to respond with a failure (401)
    mockAxios.onPost("http://127.0.0.1:8000/api/login/").reply(401, {
      detail: "Invalid credentials",
    });

    renderWithRouter(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/Username/i), {
      target: { value: "wronguser" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // Wait for the axios error to be handled
    await waitFor(() => {
      // Check that window.alert was called with the correct message
      expect(window.alert).toHaveBeenCalledWith(
        "Login failed! Please check your credentials."
      );
    });
  });
});

import { render, screen } from "@testing-library/react";
import { Projects } from "../projects";

jest.mock("../ui/link-preview", () => ({
  LinkPreview: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("Projects Component", () => {
  it("renders projects section with correct title", () => {
    render(<Projects />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders project title and description", () => {
    render(<Projects />);
    expect(screen.getByText("S3 Upload - Image Storage")).toBeInTheDocument();
    expect(
      screen.getByText(/A robust and efficient service/)
    ).toBeInTheDocument();
  });

  it('renders "All" button with correct link', () => {
    render(<Projects />);
    const allButton = screen.getByRole("link", { name: /all/i });
    expect(allButton).toBeInTheDocument();
    expect(allButton).toHaveAttribute("href", "/projects");
  });
});

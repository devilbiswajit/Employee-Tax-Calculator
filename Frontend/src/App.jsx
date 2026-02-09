import { useState } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
    const [numEmployees, setNumEmployees] = useState("");
    const [totalSalary, setTotalSalary] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const calculate = async () => {
        setError("");
        setResult(null);

        try {
            const response = await fetch(`${API_URL}/calculate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    numEmployees: Number(numEmployees),
                    totalSalary: Number(totalSalary)
                })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Something went wrong");
            } else {
                setResult(data);
            }
        } catch (err) {
            setError("Backend not reachable");
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Employee Tax Calculator</h2>

            <input
                type="number"
                placeholder="Number of Employees"
                value={numEmployees}
                onChange={(e) => setNumEmployees(e.target.value)}
            />
            <br /><br />

            <input
                type="number"
                placeholder="Total Yearly Salary"
                value={totalSalary}
                onChange={(e) => setTotalSalary(e.target.value)}
            />
            <br /><br />

            <button onClick={calculate}>Calculate</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {result && (
                <>
                    <h3>Total Tax: ₹{result.totalTax}</h3>

                    <table border="1" cellPadding="8">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Salary</th>
                                <th>Tax</th>
                                <th>Take Home</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.employees.map(emp => (
                                <tr key={emp.employeeId}>
                                    <td>{emp.employeeId}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.tax}</td>
                                    <td>{emp.takeHome}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

export default App;

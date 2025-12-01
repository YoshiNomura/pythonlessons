// Updated script.js with corrected JavaScript code for Pyodide integration

// Load Pyodide
async function loadPyodide() {
    const pyodide = await loadPyodide();
    await pyodide.loadPackage("numpy");
    return pyodide;
}

// Execute Python code
async function executePythonCode(code) {
    const pyodide = await loadPyodide();
    try {
        let output = await pyodide.runPython(code);
        console.log(output);
    } catch (err) {
        console.error(err);
    }
}

// Example usage
const pythonCode = `
import numpy as np
arr = np.array([1, 2, 3])
arr.sum()
`;

executePythonCode(pythonCode);
from qiskit import QuantumCircuit
import webbrowser
import os

# 1. Create a Quantum Circuit with 1 qubit
qc = QuantumCircuit(1)

# 2. Put the qubit into superposition
qc.h(0)

# 3. Measure the result
qc.measure_all()

print("Quantum Superposition established...")
print("Collapsing wave function to access MEV...")

# Opens the local file directly in the current directory
target_path = "file://" + os.path.abspath("index.html")
webbrowser.open(target_path)

from qiskit import QuantumCircuit, assemble, Aer
from qiskit.visualization import plot_histogram
import webbrowser

# 1. Create a Quantum Circuit with 1 qubit
qc = QuantumCircuit(1)

# 2. Put the qubit into superposition (Both 0 and 1 at once)
qc.h(0)

# 3. Measure the result
qc.measure_all()

print("Quantum Superposition established...")
print("Collapsing wave function to access MEV...")

# If the 'measurement' succeeds (which it always does in this gate), open the wiki
webbrowser.open("http://127.0.0.1:8000/")

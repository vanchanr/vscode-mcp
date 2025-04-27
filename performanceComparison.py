import plotly.graph_objects as go
import random

# Sample data based on the hypothesis
categories = [
    "Form Filling",
    "E-commerce",
    "Paginated Data Extraction"
]
pixel_based_times = [50, 80, 120]  # Hypothetical times in seconds
accessibility_tree_times = [
    time * (0.8 + random.uniform(-0.05, 0.05)) for time in pixel_based_times  # Add random jitter
]

# Create the line chart
fig = go.Figure()
fig.add_trace(go.Scatter(
    x=categories,
    y=pixel_based_times,
    mode='lines+markers',
    name='Pixel-based Agent',
    line=dict(color='orange')
))
fig.add_trace(go.Scatter(
    x=categories,
    y=accessibility_tree_times,
    mode='lines+markers',
    name='Accessibility Tree-based Agent',
    line=dict(color='green')
))

# Update layout
fig.update_layout(
    xaxis_title="Task Categories",
    yaxis_title="Time to Complete (seconds)",
    legend_title="Agent Type",
    legend=dict(orientation="h", yanchor="bottom", y=-0.3, xanchor="center", x=0.5),
    template="plotly_white"
)

# Save the plot as an image
fig.write_image("performance_comparison.png")

# Show the plot
fig.show()
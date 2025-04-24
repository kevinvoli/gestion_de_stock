"use client"; // Pour Next.js App Router

import { useState } from "react";
import { Slider, Box, Typography, Grid, Paper } from "@mui/material";

export default function CustomSliders() {
  // États des sliders
  const [range1, setRange1] = useState<number[]>([1000, 4000]);
  const [range2, setRange2] = useState<number[]>([30000, 90000]);
  const [range5, setRange5] = useState<number>(5);
  const [range6, setRange6] = useState<number>(0);
  const [range4, setRange4] = useState<number[]>([10000, 100000]);
  const [bootstrapSlider, setBootstrapSlider] = useState<number[]>([-100, 100]);

  return (
    <section className="content">
      {/* Ion Slider */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Ion Slider</Typography>
            <Grid container spacing={3}>
              {/* Slider Prix ($) */}
              <Grid item xs={6}>
                <Typography>Prix ($)</Typography>
                <Slider
                  value={range1}
                  onChange={(_, newValue) => setRange1(newValue as number[])}
                  min={0}
                  max={5000}
                  step={1}
                  valueLabelDisplay="auto"
                />
              </Grid>

              {/* Slider Double (€) */}
              <Grid item xs={6}>
                <Typography>Montant (€)</Typography>
                <Slider
                  value={range2}
                  onChange={(_, newValue) => setRange2(newValue as number[])}
                  min={1000}
                  max={100000}
                  step={500}
                  valueLabelDisplay="auto"
                />
              </Grid>

              {/* Slider mm */}
              <Grid item xs={6}>
                <Typography>Épaisseur (mm)</Typography>
                <Slider
                  value={range5}
                  onChange={(_, newValue) => setRange5(newValue as number)}
                  min={0}
                  max={10}
                  step={0.1}
                  valueLabelDisplay="auto"
                />
              </Grid>

              {/* Slider Température (°) */}
              <Grid item xs={6}>
                <Typography>Température (°)</Typography>
                <Slider
                  value={range6}
                  onChange={(_, newValue) => setRange6(newValue as number)}
                  min={-50}
                  max={50}
                  step={1}
                  valueLabelDisplay="auto"
                />
              </Grid>

              {/* Distance en années-lumière */}
              <Grid item xs={12}>
                <Typography>Distance (Années-lumière)</Typography>
                <Slider
                  value={range4}
                  onChange={(_, newValue) => setRange4(newValue as number[])}
                  min={10000}
                  max={100000}
                  step={100}
                  valueLabelDisplay="auto"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Bootstrap Slider */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Bootstrap Slider</Typography>
            <Grid container spacing={3}>
              {/* Slider Horizontal */}
              <Grid item xs={6}>
                <Typography>Valeur (-200 à 200)</Typography>
                <Slider
                  value={bootstrapSlider}
                  onChange={(_, newValue) => setBootstrapSlider(newValue as number[])}
                  min={-200}
                  max={200}
                  step={5}
                  valueLabelDisplay="auto"
                />
              </Grid>

              {/* Slider Vertical */}
              <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography>Valeur Verticale</Typography>
                <Slider
                  value={bootstrapSlider}
                  onChange={(_, newValue) => setBootstrapSlider(newValue as number[])}
                  min={-200}
                  max={200}
                  step={5}
                  valueLabelDisplay="auto"
                  orientation="vertical"
                  sx={{ height: 200 }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}

# Arms Smuggling Across Ukraine–Russia Border GEOINT + OSINT Case Study

This project is an open-source case study demonstrating how **Geospatial Intelligence (GEOINT)** and **Open Source Intelligence (OSINT)** can be used together to identify and analyze suspected arms smuggling routes using publicly available data and satellite imagery.

## Objective

To simulate the tracking of illicit weapons shipments across the Ukraine–Russia border using:

- Open-source satellite imagery
- Geospatial analysis tools (QGIS, SentinelHub, Python)
- OSINT techniques (social media, maritime trackers, NGO reports)

---

## Tools & Technologies

| Tool | Use |
|------|-----|
| QGIS / ArcGIS | Satellite image analysis |
| SentinelHub EO Browser | Free/open satellite imagery |
| Python (GeoPandas, Rasterio, Matplotlib) | Programmatic image/data analysis |
| Google Earth | Historical satellite comparison |
| AIS/Vessel Trackers | Ship tracking |
| Social media scraping | Cross-validation of ground activity |

---

## Methodology

1. **Region Selection:** Select a segment of the Ukraine–Russia border as the area of interest.
2. **Imagery Collection:** Download satellite imagery from before and after key conflict periods using EO Browser or Google Earth Pro, SentinelHub, or Landsat.
3. **Geospatial Analysis:** Visualize changes in terrain or movement patterns in notebooks.
4. **OSINT Correlation:** Augment findings with OSINT sources to build a plausible narrative of smuggling activity. Gather open-source data such as:
   - NGO/UN reports
   - Social media geotags
   - AIS ship tracker logs
5. **Reporting:** Combine findings into a structured intelligence report using GEOINT tradecraft.

---
### Individual Steps

1. Select a region in [Sentinal Hub's EO Browser](https://apps.sentinel-hub.com/eo-browser/)
2. Select a known or suspected arms smuggling corridor

---

## Deliverables

- Annotated satellite visuals
- Jupyter notebooks documenting geospatial analysis
- Final intelligence report with findings and tradecraft explanation

---

## Disclaimer

This project is for educational and professional demonstration purposes only. All data used is publicly available and not affiliated with any government or law enforcement operations.
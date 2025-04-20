import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import cert1 from "../../Assets/certificate1.pdf";
import cert2 from "../../Assets/certificate2.pdf";
import cert3 from "../../Assets/certificate3.pdf";
import cert4Img from "../../Assets/certificate4.jpg";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const certificates = [
  {
    file: cert3,
    name: "R Programming Course",
    issuer: "Johns Hopkins University / Coursera",
    type: "pdf",
    description:
      "An online non-credit course authorized by Johns Hopkins University and offered through Coursera on basics of R programming.",
  },
  {
    file: cert2,
    name: "CyberShikshaa Fundamentals",
    issuer: "CyberShikshaa (Microsoft & DSCI) / Quick Heal Academy",
    type: "pdf",
    description:
      "Successfully completed the cybersecurity awareness online training program ‘CyberShikshaa Fundamentals’ under CyberShikshaa, a joint initiative of Microsoft & DSCI, conducted by Quick Heal Academy.",
  },
  {
    file: cert4Img,
    name: "Data Structures and Algorithms",
    issuer: "GeeksforGeeks",
    type: "image",
    description:
      "Mastered key data structures like arrays, trees, heaps, graphs, and hash maps. Learned algorithmic strategies such as dynamic programming, recursion, greedy algorithms, and backtracking to solve complex coding problems efficiently.",
  },
  {
    file: cert1,
    name: "Cloud Computing",
    issuer: "NPTEL",
    type: "pdf",
    description:
      "Covered cloud service models (IaaS, PaaS, SaaS), virtualization technologies, and deployment models. Developed an understanding of how cloud platforms scale and manage distributed applications.",
  },
];

function Certificate() {
  const [width, setWidth] = useState(1200);
  const [pages, setPages] = useState({});

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = (numPages, name) => {
    setPages((prev) => ({ ...prev, [name]: numPages }));
  };

  return (
    <Container fluid className="resume-section py-4 px-3">
      <Particle />
      <h2 className="text-center text-white mb-4">📜 Certificates</h2>

      {certificates.map((cert, index) => {
        const isEven = index % 2 === 0;

        const Description = (
          <Col
            md={6}
            className="d-flex align-items-center mb-3"
            style={{ minHeight: "250px" }}
          >
            <div style={{ color: "white" }}>
              <h4 className="mb-1 text-white">{cert.name}</h4>
              <h6 className="text-muted mb-2">{cert.issuer}</h6>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "0.95rem",
                  color: "white",
                }}
              >
                {cert.description}
              </p>
            </div>
          </Col>
        );

        const Preview = (
          <Col md={6} className="mb-3 d-flex align-items-center justify-content-center">
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
              className="shadow-sm"
            >
              {cert.type === "pdf" ? (
                <Document
                  file={cert.file}
                  onLoadSuccess={({ numPages }) =>
                    onDocumentLoadSuccess(numPages, cert.name)
                  }
                >
                  <Page
                    pageNumber={1}
                    width={width > 786 ? 330 : 250}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                </Document>
              ) : (
                <img
                  src={cert.file}
                  alt={cert.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          </Col>
        );

        return (
          <Card
            key={index}
            className="mb-4 py-3 px-3"
            style={{
              border: "none",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              borderRadius: "15px",
            }}
          >
            <Row className="align-items-center">
              {isEven ? (
                <>
                  {Description}
                  {Preview}
                </>
              ) : (
                <>
                  {Preview}
                  {Description}
                </>
              )}
            </Row>
            <div className="d-flex justify-content-center mt-3">
              <Button
                variant="primary"
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                size="sm"
                style={{ fontSize: "0.9rem" }}
              >
                <AiOutlineDownload /> &nbsp;Download Certificate
              </Button>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}

export default Certificate;

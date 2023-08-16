import React, { useState, useEffect, useCallback } from "react";
import Styled from "./TablePaginationWeather.styles";
import images from "../../../assets/images";

function TablePaginationWeather({ currentPage, totalPages, onPageChange }) {
  // Número máximo de páginas visibles
  const maxVisiblePageNumbers = 6;

  // Estado para controlar si está cargando
  const [isLoading, setIsLoading] = useState(true);

  // Función para calcular los números de página visibles
  const calculateVisiblePageNumbers = useCallback(() => {
    const pageNumbers = [];

    if (totalPages <= maxVisiblePageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      const middleStart = Math.max(
        currentPage - Math.floor(maxVisiblePageNumbers / 2),
        2
      );
      const middleEnd = Math.min(
        middleStart + maxVisiblePageNumbers - 3,
        totalPages - 1
      );

      if (middleStart > 2) {
        pageNumbers.push("...");
      }

      for (let i = middleStart; i <= middleEnd; i++) {
        pageNumbers.push(i);
      }

      if (middleEnd < totalPages - 1) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  }, [currentPage, totalPages, maxVisiblePageNumbers]);

  // Cambiar el estado después de 2500 ms
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <Styled.PaginationContainer>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <Styled.PaginationList>
          <Styled.PaginationItem
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            $isarrow="true"
          >
            <Styled.Image src={images.chevronleft} alt="<" />
          </Styled.PaginationItem>

          {calculateVisiblePageNumbers().map((pageNumber, index) => (
            <Styled.PaginationItem
              key={index}
              onClick={() => {
                if (typeof pageNumber === "number") {
                  onPageChange(pageNumber);
                }
              }}
              $isactive={pageNumber === currentPage ? "true" : "false"}
              $isellipsis={typeof pageNumber !== "number" ? "true" : "false"}
            >
              {typeof pageNumber === "number" ? pageNumber : "..."}
            </Styled.PaginationItem>
          ))}

          <Styled.PaginationItem
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            $isarrow="true"
          >
            <Styled.Image src={images.chevronright} alt=">" />
          </Styled.PaginationItem>
        </Styled.PaginationList>
      )}
    </Styled.PaginationContainer>
  );
}

export default TablePaginationWeather;

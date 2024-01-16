import React, { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { GetUsersRequest } from "../types";
import PageButton from "./PageButton";

export default function PageControls(req: GetUsersRequest) {
  const isFirstPage = req.page === "1";
  const [_, setParams] = useSearchParams();

  const handleNext = useCallback(() => {
    const next = parseInt(req.page ?? "1") + 1;
    setParams({ ...req, page: next.toString() });
  }, [req, setParams]);

  const handlePrevious = useCallback(() => {
    const previous = parseInt(req.page ?? "1") - 1;
    setParams({ ...req, page: previous.toString() });
  }, [req, setParams]);
  return (
    <div className="flex justify-between items-center w-full">
      <PageButton
        onClick={handlePrevious}
        disabled={isFirstPage}
        label="Previous"
      />
      <PageButton onClick={handleNext} label="Next" />
    </div>
  );
}

'use client';
import React from "react";
import { Fragment, useState, useEffect } from "react";

export function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
      }, []);

  return (
    <footer>
        <Fragment>
            <p>{`©${year} Nancy Rips. All Rights Reserved.`}</p>
        </Fragment>
    </footer>
  );
}
/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { jsx, Box } from 'theme-ui';
import { ethers } from "ethers";
import axios from "axios";
import { useRouter } from 'next/router'
import Web3Modal from "web3modal";

  return (
    <Box as="section"  sx={styles.section}>
      <div className="bg-purple-100 text-4xl text-center text-black font-bold pt-10">
        <h1> Analytics</h1>
      </div>
      <div className="flex flex-col bg-purple-100 text-2xl text-center text-black font-bold pt-10">

        <h2> User's Stats</h2>
        
        <table className="table-auto border-separate border-spacing-2 border border-slate-500">
  <thead className="bg-purple-800 text-2xl text-center text-white">
    <tr >
      <th className="border border-slate-600">Variable</th>
      <th className="border border-slate-600">statistics</th>
      <th className="border border-slate-600">Year Started</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-700">Wallet Address</td>
      <td className="border border-slate-700">{address}</td>
      <td className="border border-slate-700">2022</td>
    </tr>
    <tr className="bg-gray-300 border-b">
      <td className="border border-slate-700">Total Number of Files in contract</td>
      <td className="border border-slate-700">{fall}</td>
      <td className="border border-slate-700">2022</td>
    </tr>
    <tr>
      <td className="border border-slate-700">Number of Files Uploaded by me</td>
      <td className="border border-slate-700">{fme}</td>
      <td className="border border-slate-700">2022</td>
    </

tr>
  </tbody>
</table>

      </div>
      <div className="bg-purple-100 text-4xl text-center text-black font-bold pt-20 pb-10">
        <h1>0% of storage used.</h1>
      </div>

      
    </Box>
  );
}

const styles = {
  section: {
    backgroundColor: 'primary',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
 };

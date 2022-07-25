import React, { useState } from "react";
import { contractAbi, contractAddress } from "../config.json";
import { ethers } from "ethers";
import { useEffect } from "react";

export const BlockChainContext = React.createContext();

export const BlockChainProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [balance, setBalance] = useState();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const address = contractAddress;
  const abi = contractAbi;
  const contract = new ethers.Contract(address, abi, signer);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Metamask not installed");
      const accounts = await provider.send("eth_requestAccounts", []);
      console.log(accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object!");
    }
  };

  const checkWalletConnected = async () => {
    try {
      if (!window.ethereum) return alert("Metamask not installed");
      const accounts = await provider.send("eth_accounts", []);

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBalance = async () => {
    try {
      const balance = await contract.balanceOf();
      const newBal = ethers.utils.formatEther(balance);
      setBalance(newBal);
      console.log(newBal);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkWalletConnected();
    getBalance();
  }, []);

  return (
    <BlockChainContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </BlockChainContext.Provider>
  );
};

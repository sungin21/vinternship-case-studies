import React, { useState, useReducer } from "react";


// =======================
// Interface for Asset
// =======================

interface Asset {
  name: string;
  symbol: string;
  value: number;
  change: number;
}


// =======================
// Functional Component
// =======================

interface AssetListProps {
  assets: Asset[];
  onRemove: (symbol: string) => void;
}

const AssetList: React.FC<AssetListProps> = ({
  assets,
  onRemove
}) => {
  return (
    <div>
      <h2>Asset List</h2>

      <ul>
        {assets.map((asset) => (
          <li key={asset.symbol}>
            {asset.name} ({asset.symbol}) -
            ${asset.value} -
            {asset.change > 0 ? "+" : ""}
            {asset.change}%

            <button
              onClick={() => onRemove(asset.symbol)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


// =======================
// Portfolio Summary
// =======================

interface PortfolioSummaryProps {
  assets: Asset[];
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({
  assets
}) => {

  const totalValue = assets.reduce(
    (sum, asset) => sum + asset.value,
    0
  );

  const averageChange =
    assets.length > 0
      ? assets.reduce(
          (sum, asset) => sum + asset.change,
          0
        ) / assets.length
      : 0;

  return (
    <div>
      <h2>Portfolio Summary</h2>

      <p>Total Value: ${totalValue}</p>

      <p>
        Average Change:
        {" "}
        {averageChange.toFixed(2)}%
      </p>
    </div>
  );
};


// =======================
// useReducer Typing
// =======================

interface PortfolioState {
  assets: Asset[];
}

type PortfolioAction =
  | { type: "add"; asset: Asset }
  | { type: "remove"; symbol: string };

function portfolioReducer(
  state: PortfolioState,
  action: PortfolioAction
): PortfolioState {

  switch (action.type) {

    case "add":
      return {
        ...state,
        assets: [...state.assets, action.asset]
      };

    case "remove":
      return {
        ...state,
        assets: state.assets.filter(
          (a) => a.symbol !== action.symbol
        )
      };

    default:
      return state;
  }
}


// =======================
// Class Component
// =======================

interface AssetEditorProps {
  onUpdate: (asset: Asset) => void;
}

interface AssetEditorState {
  name: string;
  symbol: string;
  value: string;
  change: string;
}

class AssetEditor extends React.Component<
  AssetEditorProps,
  AssetEditorState
> {

  state: AssetEditorState = {
    name: "",
    symbol: "",
    value: "",
    change: ""
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    this.props.onUpdate({
      name: this.state.name,
      symbol: this.state.symbol,
      value: parseFloat(this.state.value),
      change: parseFloat(this.state.change)
    });

    this.setState({
      name: "",
      symbol: "",
      value: "",
      change: ""
    });
  };

  render() {

    return (
      <div>
        <h2>Add Asset</h2>

        <form onSubmit={this.handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Asset Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <br /><br />

          <input
            type="text"
            name="symbol"
            placeholder="Symbol"
            value={this.state.symbol}
            onChange={this.handleChange}
          />

          <br /><br />

          <input
            type="number"
            name="value"
            placeholder="Value"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <br /><br />

          <input
            type="number"
            name="change"
            placeholder="Change %"
            value={this.state.change}
            onChange={this.handleChange}
          />

          <br /><br />

          <button type="submit">
            Add Asset
          </button>

        </form>
      </div>
    );
  }
}


// =======================
// Main App Component
// =======================

function App() {

  const initialAssets: Asset[] = [
    {
      name: "Apple",
      symbol: "AAPL",
      value: 200,
      change: 2.5
    },
    {
      name: "Tesla",
      symbol: "TSLA",
      value: 350,
      change: -1.2
    }
  ];

  const [state, dispatch] = useReducer(
    portfolioReducer,
    {
      assets: initialAssets
    }
  );

  const handleRemove = (
    symbol: string
  ) => {

    dispatch({
      type: "remove",
      symbol
    });
  };

  const handleAdd = (
    asset: Asset
  ) => {

    dispatch({
      type: "add",
      asset
    });
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Smart Portfolio Dashboard</h1>

      <PortfolioSummary assets={state.assets} />

      <AssetEditor onUpdate={handleAdd} />

      <AssetList
        assets={state.assets}
        onRemove={handleRemove}
      />

    </div>
  );
}

export default App;
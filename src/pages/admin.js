import React, { useEffect, useState } from "react";
import {
  readTranslations,
  updateTranslations,
} from "../../services/translationsService";

export default function TranslationsManager() {
  const [translations, setTranslations] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      fetchTranslations();
    }
  }, [isLoggedIn]);

  const fetchTranslations = async () => {
    setLoading(true);
    try {
      const data = await readTranslations();
      setTranslations(data);
      setEditedData({});
    } catch (error) {
      console.error("Error fetching translations:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "Pass@123") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect password");
    }
  };

  const handleInputChange = (keyPath, value) => {
    setEditedData((prev) => ({
      ...prev,
      [keyPath]: value,
    }));
  };

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      await updateTranslations(editedData);
      await fetchTranslations();
    } catch (error) {
      console.error("Error updating translations:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderTranslationFields = (data, parentKey = "") => {
    return Object.entries(data).map(([key, value]) => {
      const keyPath = parentKey ? `${parentKey}.${key}` : key;
      if (typeof value === "object" && value !== null) {
        return (
          <div key={keyPath} className="ml-6">
            <div className="font-semibold text-gray-700 mb-2">{key}</div>
            {renderTranslationFields(value, keyPath)}
          </div>
        );
      }
      return (
        <div
          key={keyPath}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-b border-gray-200"
        >
          <div className="text-sm font-medium text-gray-700">{keyPath}</div>
          <div>
            <input
              type="text"
              value={
                editedData[keyPath] !== undefined ? editedData[keyPath] : value
              }
              onChange={(e) => handleInputChange(keyPath, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
            />
          </div>
        </div>
      );
    });
  };

  const renderLoading = () => (
    <div className="flex justify-center items-center p-8">
      <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  // Login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
           Admin Translations Manager Login
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter password"
                required
              />
              {loginError && (
                <p className="mt-2 text-sm text-red-600">{loginError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Translations Manager
        </h1>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Logout
        </button>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={fetchTranslations}
          disabled={loading}
          className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 border border-gray-300 text-sm font-medium"
        >
          Refresh Translations
        </button>
        <button
          onClick={handleSaveChanges}
          disabled={loading || Object.keys(editedData).length === 0}
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 disabled:bg-orange-300 disabled:cursor-not-allowed text-sm font-medium"
        >
          Save Changes ({Object.keys(editedData).length})
        </button>
      </div>

      {loading && renderLoading()}

      {translations && !loading && (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="max-h-96 overflow-y-auto">
            {renderTranslationFields(translations)}
          </div>
        </div>
      )}
    </div>
  );
}

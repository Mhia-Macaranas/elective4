'use client';

import React, { useState } from 'react';
import { Icon } from '../atoms/Icon';

interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, placeholder = 'Search destinations...', initialValue = '' }) => {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto md:mx-0">
      <div className="relative flex items-center">
        <div className="absolute left-4 text-text-muted">
          <Icon name="search" size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value); // Real-time search
          }}
          placeholder={placeholder}
          aria-label="Search"
          className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body text-text placeholder-text-muted"
        />
      </div>
    </form>
  );
};

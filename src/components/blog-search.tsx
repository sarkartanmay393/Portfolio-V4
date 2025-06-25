"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";

interface BlogSearchProps {
  allTags: string[];
  // showAllTags: boolean;
  // showSearchBar: boolean;
  onSearch: (query: string, selectedTags: string[]) => void;
}

export default function BlogSearch({ allTags, onSearch }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    onSearch(searchQuery, selectedTags);
  }, [searchQuery, selectedTags, onSearch]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <div className="space-y-4 mb-8 flex-1">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search blogs by title, content, or tags..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4"
        />
        {(searchQuery || selectedTags.length > 0) && (
          <button
            onClick={clearFilters}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Tags */}
      {/* {allTags.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Filter by tags:</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "selected" : "clickable"}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )} */}

      {/* Active filters display */}
      {/* {(searchQuery || selectedTags.length > 0) && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Active filters:</span>
          {searchQuery && (
            <Badge variant="outline">
              Search: "{searchQuery}"
            </Badge>
          )}
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="outline">
              Tag: {tag}
            </Badge>
          ))}
        </div>
      )} */}
    </div>
  );
} 
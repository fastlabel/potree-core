import { ResourceTarget } from "types";

/**
 * RequestManager interface for handling HTTP requests.
 * 
 * This interface defines methods for fetching resources and resolving URLs.
 */
export interface RequestManager {
  /**
   * Fetches a resource from the network.
   */
  fetch(target:ResourceTarget, init?: RequestInit): Promise<Response>;
  
  /**
   * Get the URL for a given resource.
   */
  getUrl(target:ResourceTarget): Promise<string>;
}

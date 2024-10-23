type XCacheEntry = {
  expires: number;
};

class XCache {
  private cache: Map<string, XCacheEntry>;
  private ttl: number;

  constructor(ttl: number) {
    this.cache = new Map();
    this.ttl = ttl;
  }

  set(key: string): void {
    const expires = Date.now() + this.ttl;
    this.cache.set(key.toLowerCase(), { expires });
    console.log(`Address ${key.toLowerCase()} cached until ${new Date(expires).toISOString()} ----\n`)
  }

  get(key: string): boolean {
    const entry = this.cache.get(key.toLowerCase());
    if (entry && entry.expires > Date.now()) {
      return true;
    } else {
      this.cache.delete(key.toLowerCase());
      return false;
    }
  }
}

export default XCache;
  
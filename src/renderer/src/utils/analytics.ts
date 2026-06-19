export function initAnalytics(): void {
  return;
}

export function capture(
  _event: string,
  _properties?: Record<string, unknown>,
): void {
  return;
}

export function captureScreenView(_screen: string): void {
  return;
}

export function captureFeatureUsage(
  _feature: string,
  _details?: Record<string, unknown>,
): void {
  return;
}

export function getAnalyticsConsent(): boolean {
  return false;
}

export function setAnalyticsConsent(_enabled: boolean): void {
  return;
}

export function resetAnalytics(): void {
  return;
}

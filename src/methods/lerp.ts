export const lerp = (min: number, max: number, fraction = 0.1) => {
  return (max - min) * fraction + min
}

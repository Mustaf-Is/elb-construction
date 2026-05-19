import type { ServiceItem } from "../../content/site.fr";

type ServiceIconProps = {
  icon: ServiceItem["icon"];
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export default function ServiceIcon({ icon }: ServiceIconProps) {
  switch (icon) {
    case "build":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...strokeProps} d="M3 10.5 12 3l9 7.5" />
          <path {...strokeProps} d="M5 9.8V21h14V9.8" />
          <path {...strokeProps} d="M9 21v-6h6v6" />
        </svg>
      );
    case "renovation":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...strokeProps} d="M4 20h16" />
          <path {...strokeProps} d="M7 20v-8l5-4 5 4v8" />
          <path {...strokeProps} d="m3 6 3 3 4-4" />
        </svg>
      );
    case "stairs":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...strokeProps} d="M4 20h16" />
          <path {...strokeProps} d="M4 20v-4h4v-4h4v-4h4V4h4" />
        </svg>
      );
    case "finish":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...strokeProps} d="M3 7h13l5 5-7 7-8-8z" />
          <path {...strokeProps} d="M8 7V4h8v3" />
          <path {...strokeProps} d="m13 12 3 3" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...strokeProps} d="M12 19a7 7 0 1 0-7-7" />
          <path {...strokeProps} d="M5 12v4a2 2 0 0 0 2 2h3" />
          <path {...strokeProps} d="M19 12v4a2 2 0 0 1-2 2h-3" />
          <path {...strokeProps} d="M9 12h6" />
        </svg>
      );
    default:
      return null;
  }
}

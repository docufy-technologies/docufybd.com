import {
  IconBrandLinkedin,
  IconBrandX,
  IconWorld,
} from "@tabler/icons-solidjs";
import { createSignal } from "solid-js";
import { cn } from "../../lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageURL: string;
  socialLinks?: {
    X?: string;
    LinkedIn?: string;
    website?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "moon-bmda",
    name: "Md Farhan Mahmud Moon",
    role: "Business and Management Development Advisor",
    imageURL: "/moon.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/1farhanmahmud/",
      X: "https://x.com/1farhanmahmud",
    },
  },
  {
    id: "sneha-ceo",
    name: "Sneha Salam",
    role: "Founder & Chief Executive Officer",
    imageURL: "/sneha.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/sneha-salam/",
      website: "https://snehasalam.com",
      X: "https://x.com/SalamSneha",
    },
  },
  {
    id: "snigdho-cmo",
    name: "MD Ferdous Hassan",
    role: "Chief Communications Officer",
    imageURL: "/snigdho.png",
    socialLinks: { LinkedIn: "https://www.linkedin.com/in/ferdoushassan280/" },
  },
  {
    id: "ashik-clo",
    name: "Md Izaz Uddin Ashik",
    role: "Chief Legal Officer",
    imageURL: "/ashik.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/md-izaz-uddin-258788121/",
    },
  },
  {
    id: "ratul-cto",
    name: "Rakibul Hasan Ratul",
    role: "Chief Technology Officer",
    imageURL: "/ratul.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/rhasanratul",
      X: "https://x.com/RHasanRatul",
    },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export function TeamShowcaseMobile({
  members = DEFAULT_MEMBERS,
}: TeamShowcaseProps) {
  return (
    <div class="sm:hidden flex flex-col justify-center items-center gap-16">
      {members.map((member) => (
        <div class="flex flex-col items-center gap-4 max-w-[90%] text-center!">
          <img
            src={member.imageURL}
            alt={member.name}
            class="size-52 rounded-xl"
          />
          <div>
            <h3 class="text-lg font-medium">{member.name}</h3>
            {member.socialLinks && (
              <div class="flex justify-center items-center">
                {member.socialLinks?.LinkedIn && (
                  <a
                    href={member.socialLinks.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    class="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                    title="LinkedIn"
                  >
                    <IconBrandLinkedin size={20} />
                  </a>
                )}
                {member.socialLinks?.X && (
                  <a
                    href={member.socialLinks.X}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    class="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                    title="X / Twitter"
                  >
                    <IconBrandX size={20} />
                  </a>
                )}
                {member.socialLinks?.website && (
                  <a
                    href={member.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    class="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                    title="Portfolio"
                  >
                    <IconWorld size={20} />
                  </a>
                )}
              </div>
            )}
            <p class="text-base px-8 mx-auto text-secondary font-bold">
              {member.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TeamShowcaseDesktop({
  members = DEFAULT_MEMBERS,
}: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = createSignal<string | null>(null);

  const col1 = members.filter(
    (m) => m.id === "moon-bmda" || m.id === "ashik-clo",
  );
  const col2 = members.filter((m) => m.id === "sneha-ceo");
  const col3 = members.filter(
    (m) => m.id === "snigdho-cmo" || m.id === "ratul-cto",
  );

  return (
    <div class="max-sm:hidden flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-6 select-none w-full max-w-4xl mx-auto py-8 px-4 md:px-6 font-sans">
      {/* ── Left: photo grid ── */}
      <div class="flex gap-2 flex-shrink-0 overflow-x-auto mx-auto pb-1 md:pb-0">
        {/* Column 1 */}
        <div class="flex flex-col gap-2">
          {col1.map((member) => (
            <PhotoCard
              member={member}
              class="w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div class="flex flex-col gap-2 mt-[56px] sm:mt-[72px] md:mt-[96px]">
          {col2.map((member) => (
            <PhotoCard
              member={member}
              class="w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div class="flex flex-col gap-2 mt-[22px] sm:mt-[26px] md:mt-[32px]">
          {col3.map((member) => (
            <PhotoCard
              member={member}
              class="w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list*/}
      <div class="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
        {members.map((member) => (
          <MemberRow
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card
───────────────────────────────────────── */

function PhotoCard(props: {
  member: TeamMember;
  class?: string;
  hoveredId: () => string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = () => props.hoveredId() === props.member.id;
  const isDimmed = () => props.hoveredId() !== null && !isActive();

  return (
    <button
      type="button"
      class={cn(
        "overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400",
        props.class,
        isDimmed() ? "opacity-60" : "opacity-100",
      )}
      onMouseEnter={() => props.onHover(props.member.id)}
      onMouseLeave={() => props.onHover(null)}
    >
      <img
        src={props.member.imageURL}
        alt={props.member.name}
        class="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive()
            ? "grayscale(0) brightness(1)"
            : "grayscale(1) brightness(0.77)",
        }}
      />
    </button>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow(props: {
  member: TeamMember;
  hoveredId: () => string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = () => props.hoveredId() === props.member.id;
  const isDimmed = () => props.hoveredId() !== null && !isActive();

  return (
    <button
      type="button"
      class={cn(
        "cursor-pointer transition-opacity duration-300 text-right",
        isDimmed() ? "opacity-50" : "opacity-100",
      )}
      onMouseEnter={() => props.onHover(props.member.id)}
      onMouseLeave={() => props.onHover(null)}
    >
      {/* Name + social*/}
      <div class="flex justify-end items-center gap-2.5">
        {/* Social icons */}
        {props.member.socialLinks && (
          <div
            class={cn(
              "flex items-center gap-1.5 ml-0.5 transition-all duration-200",
              isActive()
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-2 pointer-events-none",
            )}
          >
            {props.member.socialLinks?.LinkedIn && (
              <a
                href={props.member.socialLinks.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                class="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <IconBrandLinkedin size={20} />
              </a>
            )}
            {props.member.socialLinks?.X && (
              <a
                href={props.member.socialLinks.X}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                class="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <IconBrandX size={20} />
              </a>
            )}
            {props.member.socialLinks?.website && (
              <a
                href={props.member.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                class="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="Portfolio"
              >
                <IconWorld size={20} />
              </a>
            )}
          </div>
        )}
        <span
          class={cn(
            "w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300",
            isActive() ? "bg-foreground w-5" : "bg-foreground/25",
          )}
        />
        <span
          class={cn(
            "text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300",
            isActive() ? "text-foreground" : "text-foreground/80",
          )}
        >
          {props.member.name}
        </span>
      </div>

      {/* Role */}
      <p class="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {props.member.role}
      </p>
    </button>
  );
}

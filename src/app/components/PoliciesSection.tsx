import { FaDownload } from "react-icons/fa";

type Policy = {
  id: number;
  title: string;
  description: string;
  file: string; // File path to be downloaded
};

export default function PoliciesSection() {
  const policies: Policy[] = [
    {
      id: 1,
      title: "Privacy Policy",
      description:
        "This Privacy Notice describes the information Upcycle reput techpvt ltd. (“REPUT”, “we”, “our”, or “us”) collects, how we use and retain this information, with whom we share it, and the choices you have in connection with these activities.",
      file: "/docs/Privacy_Policy.pdf",
    },
    {
      id: 2,
      title: "Equal Opportunity Employer Policy",
      description:
        "This policy aims to Promote equality in hiring, promotions, training, compensation, benefits, and all employment decisions.",
      file: "/docs/equal_opportunity.pdf",
    },
    {
      id: 3,
      title: "Data Security Policy and Implementation Framework",
      description:
        "A policy for ensuring data security, integrity, and compliance within the Reput SaaS platform.",
      file: "/docs/data-security-policy.pdf",
    },
    {
      id: 4,
      title: "Sensitive Personal Data or Information (SPDI) and Personal Information Policy",
      description:
        "This documented information is a policy documented information highlighting the policies for Sensitive Personal Data or Information (SPDI) and Personal Information management.",
      file: "/docs/Reput-Policy_SDPI.pdf",
    },
    {
      id: 5,
      title: "Gender Policy",
      description:
        "Our Gender Policy outlines our commitment to promoting gender equality, equity, and inclusivity across all areas of our organization.",
      file: "/docs/gender-Policy.pdf",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Our Policies
        </h2>
        <p className="text-gray-600 mb-10 text-sm md:text-base">
          We are committed to transparency, compliance, and ethical business practices. Our policies ensure data protection, workplace equality, and regulatory adherence, fostering a secure and inclusive environment for all.
        </p>

        <div className="space-y-6">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center text-sm font-semibold">
                  {policy.id}
                </div>
                <div>
                  <h3 className="text-lg  text-gray-900">{policy.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{policy.description}</p>
                </div>
              </div>

              <a
                href={policy.file}
                download
                className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#173C52] text-white text-sm font-medium hover:bg-[#1e4c66] transition"
              >
                Download <FaDownload className="text-base" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quanta Crystals
            </h3>
            <p className="text-sm">
              Harnessing the power of advanced crystalline materials for quantum
              protection and bioelectric harmony. Trusted by research
              institutions worldwide.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Learn More
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://home.cern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                >
                  CERN Research
                </a>
              </li>
              <li>
                <a
                  href="https://www.fnal.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                >
                  Fermilab
                </a>
              </li>
              <li>
                <a
                  href="https://www.nibib.nih.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                >
                  Medical Imaging
                </a>
              </li>
              <li>
                <a
                  href="https://www.rp-photonics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                >
                  RP Photonics
                </a>
              </li>
            </ul>
          </div>
          <div className="group relative">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Disclaimer
            </h3>
            <div className="relative">
              <p className="text-xs leading-relaxed transition-opacity duration-500 group-hover:opacity-0">
                This is a satirical website for educational purposes. Crystals
                mentioned are real materials used in scientific research but do
                not provide health benefits, EMF protection, or quantum healing.
                All pseudoscientific claims are intentionally absurd. Please
                support real science education and research.
              </p>
              <p className="absolute inset-0 text-xs leading-relaxed italic text-gray-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                That said, there are always unknown and unexplained phenomena in
                nature. The scientific method, while powerful, has its
                limitations. Just because something hasn&apos;t been proven
                doesn&apos;t mean it&apos;s not real. We encourage you to keep an
                open mind and do your own research.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Quanta Crystals. A science
            communication project.
          </p>
        </div>
      </div>
    </footer>
  );
}

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
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Disclaimer
            </h3>
            <p className="text-xs leading-relaxed">
              This is a satirical website for educational purposes. Crystals
              mentioned are real materials used in scientific research but do
              not provide health benefits, EMF protection, or quantum healing.
              All pseudoscientific claims are intentionally absurd. Please
              support real science education and research.
            </p>
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

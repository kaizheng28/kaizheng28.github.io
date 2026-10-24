const PUBLICATIONS = [
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">FlowForm: Scalable Passive Metasurface Network for mmWave Coverage Expansion</span>
            <span class="pub-badge">SIGCOMM 2026</span>
        </div>
        <div class="pub-authors">Wuqiong Zhao, Baicheng Chen, <strong>Kai Zheng</strong>, Xingyu Chen, Wenqian Zhang, and Xinyu Zhang</div>
        <div class="pub-venue">The ACM SIGCOMM Conference (<strong>SIGCOMM</strong>), 2026</div>
        <div class="pub-links">
            <a href="https://doi.org/10.1145/3789240.3829102" class="pub-btn" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> DOI</a>
        </div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">Physically Accurate Differentiable Inverse Rendering for Radio Frequency Digital Twin</span>
            <span class="pub-badge">MobiCom 2026</span>
        </div>
        <div class="pub-authors">Xingyu Chen, Xinyu Zhang, <strong>Kai Zheng</strong>, Xinmin Fang, Tzu-Mao Li, Chris Xiaoxuan Lu, and Zhengxiong Li</div>
        <div class="pub-venue">The ACM International Conference on Mobile Computing and Networking (<strong>MobiCom</strong>), 2026 <span class="pub-rate">(Acceptance Rate: 11.2%, 29 of 260)</span></div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">MetaPolar: A Low-Cost, Passive, mmWave Radar-Readable Metasurface Road Sign</span>
            <span class="pub-badge">SenSys 2026</span>
        </div>
        <div class="pub-authors"><strong>Kai Zheng</strong>, Wuqiong Zhao, and Xinyu Zhang</div>
        <div class="pub-venue">The International Conference on Embedded Artificial Intelligence and Sensing Systems (<strong>SenSys</strong>), 2026 <span class="pub-rate">(Acceptance Rate: 19.0%, 49 of 258)</span></div>
        <div class="pub-links">
            <a href="/paper/sensys26-MetaPolar.pdf" class="pub-btn"><i class="far fa-file-pdf"></i> PDF</a>
            <a href="https://doi.org/10.1145/3774906.3800464" class="pub-btn" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> DOI</a>
        </div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">NEAR: Neural Electromagnetic Array Response</span>
            <span class="pub-badge">ICML 2025</span>
        </div>
        <div class="pub-authors">Yinyan Bu, Jiajie Yu, <strong>Kai Zheng</strong>, Xinyu Zhang, and Piya Pal</div>
        <div class="pub-venue">Forty-Second International Conference on Machine Learning (<strong>ICML</strong>), 2025 <span class="pub-rate">(Acceptance Rate: 26.9%, 3,260 of 12,107)</span></div>
        <div class="pub-links">
            <a href="/paper/icml25-near.pdf" class="pub-btn"><i class="far fa-file-pdf"></i> PDF</a>
        </div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">Enhancing mmWave Radar Sensing Using a Phased-MIMO Architecture</span>
            <span class="pub-badge">MobiSys 2024</span>
        </div>
        <div class="pub-authors"><strong>Kai Zheng</strong>, Wuqiong Zhao, Timothy Woodford, Renjie Zhao, Xinyu Zhang, and Yingbo Hua</div>
        <div class="pub-venue">The 22nd Annual International Conference on Mobile Systems, Applications and Services (<strong>MobiSys</strong>), 2024 <span class="pub-rate">(Acceptance Rate: 16.3%, 43 of 263)</span></div>
        <div class="pub-links">
            <a href="/paper/mobisys24-hybRadar.pdf" class="pub-btn"><i class="far fa-file-pdf"></i> PDF</a>
            <a href="/slides/Mobisys24_HybRadar_15-17min.pptx" class="pub-btn"><i class="far fa-file-powerpoint"></i> Slides</a>
            <a href="https://dl.acm.org/doi/abs/10.1145/3643832.3661865" class="pub-btn" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> ACM DL</a>
        </div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">NeuroRadar: A Neuromorphic Radar Sensor for Low-Power IoT Systems</span>
            <div class="pub-badges">
                <span class="pub-award"><i class="fas fa-trophy"></i> Best Paper Award</span>
                <span class="pub-badge">SenSys 2023</span>
            </div>
        </div>
        <div class="pub-authors"><strong>Kai Zheng</strong>, Kun Qian, Timothy Woodford, and Xinyu Zhang</div>
        <div class="pub-venue">The 21st ACM Conference on Embedded Networked Sensor Systems (<strong>SenSys</strong>), 2023 <span class="pub-rate">(Acceptance Rate: 19.0%, 34 of 179)</span></div>
        <div class="pub-links">
            <a href="/paper/sensys23-NeuroRadar.pdf" class="pub-btn"><i class="far fa-file-pdf"></i> PDF</a>
            <a href="/slides/Sensys23_NeuroRadar_14+3min.pptx" class="pub-btn"><i class="far fa-file-powerpoint"></i> Slides</a>
            <a href="https://dl.acm.org/doi/abs/10.1145/3625687.3625788" class="pub-btn" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> ACM DL</a>
        </div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">UniScatter: A Metamaterial Backscatter Tag for Wideband Joint Communication and Radar Sensing</span>
            <span class="pub-badge">MobiCom 2023</span>
        </div>
        <div class="pub-authors">Kun Qian, Lulu Yao, <strong>Kai Zheng</strong>, Xinyu Zhang, and Tse Nga Ng</div>
        <div class="pub-venue">The 29th Annual International Conference on Mobile Computing and Networking (<strong>MobiCom</strong>), 2023 <span class="pub-rate">(Acceptance Rate: 29.4%, 40 of 136)</span></div>
        <div class="pub-links">
            <a href="/paper/mobicom23-uniscatter.pdf" class="pub-btn"><i class="far fa-file-pdf"></i> PDF</a>
        </div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">SlimWiFi: Ultra-Low-Power IoT Radio Architecture Enabled by Asymmetric Communication</span>
            <span class="pub-badge">NSDI 2023</span>
        </div>
        <div class="pub-authors">Renjie Zhao, Kejia Wang, <strong>Kai Zheng</strong>, Xinyu Zhang, and Vincent Leung</div>
        <div class="pub-venue">The 20th USENIX Symposium on Networked Systems Design and Implementation (<strong>NSDI</strong>), 2023 <span class="pub-rate">(Acceptance Rate: 16.0%, 46 of 288)</span></div>
        <div class="pub-links">
            <a href="/paper/nsdi23-slimWiFi.pdf" class="pub-btn"><i class="far fa-file-pdf"></i> PDF</a>
        </div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">Calibrating a 4-channel fully-digital 60 GHz SDR</span>
            <span class="pub-badge">WiNTECH 2020</span>
        </div>
        <div class="pub-authors">Aditya Dhananjay, <strong>Kai Zheng</strong>, Jaakko Haarla, Lorenzo Iotti, Marco Mezzavilla, Dennis Shasha, and Sundeep Rangan</div>
        <div class="pub-venue">Proceedings of the 14th International Workshop on Wireless Network Testbeds, Experimental evaluation &amp; Characterization (<strong>WiNTECH</strong>), 2020</div>
        <div class="pub-links">
            <a href="/paper/dhananjay2020calibrating.pdf" class="pub-btn"><i class="far fa-file-pdf"></i> PDF</a>
        </div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">Characterizing 60 GHz patch antenna segments for fully digital transceiver</span>
            <span class="pub-badge">EuCAP 2020</span>
        </div>
        <div class="pub-authors">Jaakko Haarla, Vasilii Semkin, <strong>Kai Zheng</strong>, Aditya Dhananjay, Marco Mezzavilla, Juha Ala-Laurinaho, and Ville Viikari</div>
        <div class="pub-venue">14th European Conference on Antennas and Propagation (<strong>EuCAP</strong>), 2020</div>
        <div class="pub-links">
            <a href="/paper/haarla2020characterizing.pdf" class="pub-btn"><i class="far fa-file-pdf"></i> PDF</a>
        </div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">Software-defined Radios to Accelerate mmWave Wireless Innovation</span>
            <span class="pub-badge">DySPAN 2019</span>
        </div>
        <div class="pub-authors"><strong>Kai Zheng</strong>, Aditya Dhananjay, Marco Mezzavilla, Arjuna Madanayake, et al.</div>
        <div class="pub-venue">The IEEE International Symposium on Dynamic Spectrum Access Networks (<strong>DySPAN</strong>), 2019</div>
        <div class="pub-links">
            <a href="/paper/dyspan19-sdr.pdf" class="pub-btn"><i class="far fa-file-pdf"></i> PDF</a>
        </div>
    </li>`,
    `<li class="pub-item">
        <div class="pub-header">
            <span class="pub-title">MillimeTera: Toward a large-scale open-source mmWave and terahertz experimental testbed</span>
            <span class="pub-badge">mmNets 2019</span>
        </div>
        <div class="pub-authors">Michele Polese, Francesco Restuccia, Abhimanyu Gosain, Josep Jornet, Shubhendu Bhardwaj, Viduneth Ariyarathna, Soumyajit Mandal, <strong>Kai Zheng</strong>, et al.</div>
        <div class="pub-venue">Proceedings of the 3rd ACM Workshop on Millimeter-wave Networks and Sensing Systems (<strong>mmNets</strong>), 2019</div>
        <div class="pub-links">
            <a href="/paper/polese2019millimetera.pdf" class="pub-btn"><i class="far fa-file-pdf"></i> PDF</a>
        </div>
    </li>`,
];

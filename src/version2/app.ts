import { createComponent, reactive, toRefs, onMounted, ref, watch } from "@vue/composition-api";
const math = require("mathjax");
import _ from "lodash";

export default createComponent({
    setup(props, ctx) {
        const s = reactive({
            fontFamilySelect: "",
            fontSizeSelect: "",
            formula: "\\theta = n \\times 137.508^circ,",
            editor: ref(null),
            currentTab: ref(1),
            config: {
                lang: "latex",
                autoCompletion: true,
                theme: "dreamweaver",
                tabSize: 4,
                cursorPosition: { row: 0, column: 0 },
                // set page position (scroll).
                pagePosition: 0
            },
            code: "code"
        });

        const ace = ref(null);

        onMounted(() => {
            function bla(el: HTMLElement) {
                el.setAttribute("data-formula", _.cloneDeep(el.innerHTML));
                el.addEventListener("click", e => {
                    f.paste(e);
                });
            }
            const els = document.querySelectorAll(".keyboard li")!;
            els.forEach(el => {
                bla(el);
            });

            var head = document.getElementsByTagName("head")[0],
                script;
            script = document.createElement("script");
            script.type = "text/x-mathjax-config";
            script[window.opera ? "innerHTML" : "text"] =
                "MathJax.Hub.Config({\n" + "  tex2jax: { inlineMath: [['$','$'], ['\\\\(','\\\\)']] }\n" + "});";
            head.appendChild(script);
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_CHTML";
            head.appendChild(script);

            // els.forEach(he => {
            //     // var old_element = document.getElementById("btn")!;
            //     let el = he.children[1];
            //     console.log(el);
            //     bla(el);
            //     // var new_element = el.cloneNode(true);
            //     // el!.parentNode!.replaceChild(new_element, el);
            // });
        });

        const f = {
            reRender(formula: string) {
                if (window.MathJax) {
                    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, "#version2"], () => console.log("done"));
                }
            },
            init() {
                document.getElementById("editor")!.innerHTML = "$$" + s.formula + "$$";
                f.reRender(s.formula);
            },
            changeTab(n: number) {
                s.currentTab = n;
            },
            addFormula(str: string) {
                const position = ace.value.$ace.selection.getCursor();
                ace.value.$ace.session.insert(position, str);
                ace.value.$ace.focus();
            },
            paste(e: MouseEvent) {
                function getLi(el) {
                    if (el.tagName == "LI") {
                        console.log(el);
                        return el;
                    } else return getLi(el.parentNode);
                }
                if (e.target.tagName == "SPAN") {
                    var li = getLi(e.target!);
                    console.log(li);
                    var formula = li.getAttribute("data-formula");
                    formula = formula.split("$").join("");
                    f.addFormula(formula);
                } else {
                    var formula: string = e.target!.getAttribute("data-formula");
                    formula = formula.split("$").join("");
                    f.addFormula(formula);
                }
            }
        };

        onMounted(() => {
            f.init();
        });

        watch(
            () => s.formula,
            _.debounce((e: any) => {
                f.init();
            }, 300),
            { lazy: true }
        );

        return { ...toRefs(s), ...f, ace };
    }
});

(ns josh.benchmarking.visualization.views
  (:require
   [re-frame.core :as re-frame]
   [re-com.core :as re-com :refer [at]]
   [josh.benchmarking.visualization.subs :as subs]
   [aerial.hanami.common :as hc]
   [aerial.hanami.templates :as ht]
   [aerial.hanami.core :as hmi]))

(defn title []
  (let [name (re-frame/subscribe [::subs/name])]
    [re-com/title
     :src   (at)
     :label (str "Hello from " @name)
     :level :level1]))

(defn main-panel []
  [re-com/v-box
   :src      (at)
   :height   "100%"
   :children [[title]
              ]])

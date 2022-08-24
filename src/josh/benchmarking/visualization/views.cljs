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

(defn load-dataset-comp
  []
  [:p "Load dataset placeholder..."])

(defn chart-configuration-comp
  []
  [:p "Chart configuration placeholder..."])

(defn configuration-comp
  []
  [re-com/v-box
   :src (at)
   :children [[load-dataset-comp] [chart-configuration-comp]]])

(defn chart-comp
  []
  [:p "Chart placeholder..."])

(defn dataset-view-comp
  []
  [:p "Datset placeholder"])

(defn content-comp
  []
  [re-com/v-box
   :src (at)
   :children [[chart-comp] [dataset-view-comp]]])

(defn main-panel []
  [re-com/v-box
   :src      (at)
   :height   "100%"
   :children [[title]
              [re-com/h-box
               :src      (at)
               :height   "100%"
               :children [[configuration-comp] [content-comp]]]]])
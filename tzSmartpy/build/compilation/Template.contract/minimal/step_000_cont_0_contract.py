import smartpy as sp

class Contract(sp.Contract):
  def __init__(self):
    self.init_type(sp.TRecord(value = sp.TNat).layout("value"))
    self.init(value = 1)

  @sp.entry_point
  def ep(self, params):
    sp.set_type(params, sp.TNat)
    self.data.value = params